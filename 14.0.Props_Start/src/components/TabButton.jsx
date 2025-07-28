export default function TabButton({ children , onSelect }) {


  return (
    <li>
      <button onClick={onSelect}>{children}</button>
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
