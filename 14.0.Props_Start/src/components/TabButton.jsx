export default function TabButton({ children }) {
  function handleClick() {
    alert("Hẹ hẹ hẹ");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
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
