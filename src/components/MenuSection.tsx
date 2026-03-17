import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "@/data/menuData";
import MenuCategoryCard from "./MenuCategoryCard";

const categoryFilters = [
  { label: "All", id: "all" },
  { label: "☕ Beverages", ids: ["hot-beverages", "cold-beverages", "ice-cream-shakes"] },
  { label: "🍪 Snacks & Cookies", ids: ["chewy-cookies", "baked-snacks"] },
  { label: "🍨 Desserts", ids: ["sundae", "ice-cream", "kulfi"] },
  { label: "🧇 Waffles", ids: ["waffles"] },
];

const MenuSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCategories = menuCategories.filter((cat) => {
    if (activeFilter === "All") return true;
    const filter = categoryFilters.find((f) => f.label === activeFilter);
    return filter && "ids" in filter && filter.ids.includes(cat.id);
  });

  return (
    <section id="menu" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
            Handcrafted Daily
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mt-2 mb-4">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categoryFilters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => setActiveFilter(filter.label)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                activeFilter === filter.label
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCategories.map((category, index) => (
              <MenuCategoryCard key={category.id} category={category} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
