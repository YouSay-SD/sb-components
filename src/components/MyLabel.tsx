import './mylabel.css';

export interface MyLabelProps {
  /**
   * This is the message will be use in the label
   */
  label: string;

  /**
   * This is the size for default in the label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * This is the color for default in the label
   */
  color?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Capitalize letters
   */
  allCaps?: boolean;

  /**
   * Font Color
   */
  fontColor?: string;

}

export const MyLabel = ({ label = 'No Label', size = 'normal', color = 'primary', allCaps = false, fontColor }: MyLabelProps) => {
  return (
    <span 
      className={`label ${size} text-${color}`} 
      style={{color: fontColor}}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
