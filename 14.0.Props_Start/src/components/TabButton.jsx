export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
// export default function TabButton({ abc }) {
//   return (
//     <li>
//       <button>{abc}</button>
//     </li>
//   );
// }
