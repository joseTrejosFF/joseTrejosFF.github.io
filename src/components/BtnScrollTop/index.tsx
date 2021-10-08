import useScrollY from "hooks/useScrollY";
import { BtnScrollTopContainer } from "./styles";

const BtnScrollTop = () => {
  const [isVisible] = useScrollY();
  return (
    <BtnScrollTopContainer>
      {isVisible && (
        <a href="#top" className="go-top" title="Go Top">
          <i className="fas fa-arrow-circle-up" />
        </a>
      )}
    </BtnScrollTopContainer>
  );
};

export default BtnScrollTop;
