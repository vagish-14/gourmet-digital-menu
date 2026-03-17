import { motion } from "framer-motion";
import type { MenuCategory } from "@/data/menuData";

interface MenuCategoryCardProps {
  category: MenuCategory;
  index: number;
}

const MenuCategoryCard = ({ category, index }: MenuCategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-card rounded-lg border border-border p-6 hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-500"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{category.emoji}</span>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">{category.title}</h3>
      </div>

      {/* Items */}
      <ul className="space-y-3">
        {category.items.map((item, i) => (
          <li
            key={i}
            className="flex items-baseline justify-between gap-2 group/item hover:bg-muted/50 -mx-2 px-2 py-1.5 rounded-md transition-colors duration-200"
          >
            <span className="font-body text-sm sm:text-base text-foreground/85 leading-snug flex-1">
              {item.name}
            </span>
            <span className="font-body text-sm sm:text-base font-semibold text-primary whitespace-nowrap">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MenuCategoryCard;
