import {
  cloneElement,
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
} from "react";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useModal } from "../hooks/useModal";

// Styled Components
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  /* background-color: green; */
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  /* background-color: red; */
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

// Context types
interface ModalContextType {
  openName: string;
  close: () => void;
  open: (name: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Modal component types
interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState<string>("");

  const close = () => setOpenName("");
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

// Open component types
interface OpenProps {
  children: ReactElement;
  opens: string;
}

function Open({ children, opens: opensWindowName }: OpenProps) {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error("Open must be used within a Modal provider.");
  }

  const { open } = modalContext;

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

// Window component types
interface WindowProps {
  children: ReactElement;
  name: string;
}

function Window({ children, name }: WindowProps) {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error("Window must be used within a Modal provider.");
  }

  const { openName, close } = modalContext;

  const { ref } = useModal(close);

  if (name !== openName) {
    return null;
  }

  return (
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        {cloneElement(children, { close })}
      </StyledModal>
    </Overlay>
  );
}

// Assign components to Modal object
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
