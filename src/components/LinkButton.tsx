import { useNavigate } from "react-router-dom";

export default function LinkButton({ to, children }: any) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}
