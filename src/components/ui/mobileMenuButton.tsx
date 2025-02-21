import { motion } from 'framer-motion';

interface ButtonProps {
  isActive: boolean;
  toggleMenu: () => void;
}

export default function Button({ isActive, toggleMenu }: ButtonProps) {
  return (
    <div className="button">
      <motion.div
        className="slider"
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="el" onClick={toggleMenu}>
          <PerspectiveText label="Меню" />
        </div>
        <div className="el" onClick={toggleMenu}>
          <PerspectiveText label="Закрити" />
        </div>
      </motion.div>
    </div>
  );
}

interface PerspectiveTextProps {
  label: string;
}

function PerspectiveText({ label }: PerspectiveTextProps) {
  return (
    <div className="perspectiveText">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
