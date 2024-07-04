import Link from 'next/link';
import styles from '@/styles/Navbar/Navbar.module.css';

type DropdownListProps = {
  sections: any;
};

function DropdownList({ sections }:DropdownListProps) {
  return (
    <>
      {
      sections.length > 0 && (
        <div className={styles.dropdown_content}>
          {sections.map((item:any, index:any) => (
            item.label ? 
            <Link href={item.href} key={index}>
              {item.label}
            </Link> :
             <Link href= '#' key={index}>
             {item}
           </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default DropdownList;
