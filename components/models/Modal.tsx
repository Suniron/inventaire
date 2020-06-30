import React from "react";
import { styled } from "styles";
import { SimpleButton } from "./Buttons";

// Types:
interface ModalProps {
  handleClose: () => void;
  children: JSX.Element;
  title: string;
}

// Styles:
const ModalMain = styled.div((css) =>
  css.compose(
    css.bg("transparent"),
    css.fixed(),
    css.w("full"),
    css.h("full"),
    css.top(0),
    css.left(0),
    css.flex(),
    css.items("center"),
    css.justify("center"),
    css.z(20)
  )
);

const ModalOverlay = styled.div((css) =>
  css.compose(
    css.absolute(),
    css.w("full"),
    css.h("full"),
    css.bg("black"),
    css.opacity(75)
  )
);

const ModalContainer = styled.div((css) =>
  css.compose(
    css.bg("white"),
    css.w("11/12"),
    css.mx("auto"),
    css.rounded("lg"),
    css.shadow("lg"),
    css.z(50),
    css.overflowY("auto"),
    css.maxW("screen-sm")
  )
);

const ModalClose = styled.div((css) =>
  css.compose(
    css.absolute(),
    css.top(0),
    css.right(0),
    css.cursor("pointer"),
    css.flex(),
    css.flex("col"),
    css.items("center"),
    css.mt(4),
    css.mr(4),
    css.text("white"),
    css.text("sm"),
    css.z(50)
  )
);

const CloseSvgWhite = styled.svg((css) =>
  css.compose(css.fill("current"), css.text("white"))
);

const CloseSvgBlack = styled.svg((css) =>
  css.compose(css.fill("current"), css.text("black"))
);

const EscSpan = styled.span((css) => css.text("sm"));

const ModalContent = styled.div((css) =>
  css.compose(css.py(4), css.text("left"), css.px(6))
);

const ModalHeader = styled.div((css) =>
  css.compose(
    css.flex(),
    //css.justify("between"), // Bug stitches: not work
    css.items("center"),
    css.pb(3)
  )
);

const ModalTitle = styled.p((css) =>
  css.compose(css.text("2xl"), css.font("bold"))
);

const ModalClose2 = styled.div((css) =>
  css.compose(css.cursor("pointer"), css.z(50))
);

const ModalFooter = styled.div((css) =>
  css.compose(css.flex(), css.justify("end"), css.mt(3))
);

export const SectionDiv = styled.div((css) =>
  css.compose(css.my(2), css.p(1), css.border(2), css.rounded("lg"))
);

// Comp
const Modal: React.FC<ModalProps> = ({ children, title, handleClose }) => {
  return (
    <ModalMain>
      <ModalOverlay></ModalOverlay>

      <ModalContainer style={{ maxHeight: "80vh" }}>
        <ModalClose onClick={handleClose}>
          <CloseSvgWhite
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </CloseSvgWhite>
          <EscSpan>(Esc)</EscSpan>
        </ModalClose>

        {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
        <ModalContent>
          {/* <!--Header--> */}
          <ModalHeader style={{ justifyContent: "space-between" }}>
            <ModalTitle>{title}</ModalTitle>
            <ModalClose2 onClick={handleClose}>
              <CloseSvgBlack
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </CloseSvgBlack>
            </ModalClose2>
          </ModalHeader>

          {/* <!--Body--> */}
          {children}

          {/* <!--Footer--> */}
          <ModalFooter>
            <SimpleButton onClick={handleClose}>Fermer</SimpleButton>
          </ModalFooter>
        </ModalContent>
      </ModalContainer>
    </ModalMain>
  );
};

export default Modal;
