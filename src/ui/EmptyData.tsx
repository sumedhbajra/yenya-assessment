import styled, { keyframes } from "styled-components";

const TreeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const treeAnimation = keyframes`
  0% {
    transform: rotateX(-20deg) rotateY(360deg);
  }

  100% {
    transform: rotateX(-20deg) rotateY(0deg);
  }
`;

const TreeWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(30deg);
  animation: ${treeAnimation} 5s linear infinite;
`;

interface BranchProps {
  x: number;
}

const Branch = styled.div<BranchProps>`
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: translateY(calc(25px * ${(props) => props.x})) translateZ(0px);
`;

interface BranchSpanProps {
  i: number;
}

const BranchSpan = styled.span<BranchSpanProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #69c069, #77dd77);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  border-bottom: 5px solid #00000019;
  transform-origin: bottom;
  transform: rotateY(calc(90deg * ${(props) => props.i})) rotateX(30deg)
    translateZ(28.5px);
`;

interface StemSpanProps {
  i: number;
}

const StemSpan = styled.span<StemSpanProps>`
  position: absolute;
  top: 110px;
  left: calc(50% - 7.5px);
  width: 15px;
  height: 50%;
  background: linear-gradient(90deg, #bb4622, #df7214);
  border-bottom: 5px solid #00000019;
  transform-origin: bottom;
  transform: rotateY(calc(90deg * ${(props) => props.i})) translateZ(7.5px);
`;

const Stem = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`;

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  filter: blur(20px);
  transform-style: preserve-3d;
  transform: rotateX(90deg) translateZ(-65px);
`;

export default function EmptyData() {
  return (
    <TreeContainer>
      <TreeWrapper>
        {[...Array(4)].map((_, x) => (
          <Branch key={x} x={x}>
            {[...Array(4)].map((_, i) => (
              <BranchSpan key={i} i={i} />
            ))}
          </Branch>
        ))}
        <Stem>
          {[...Array(4)].map((_, i) => (
            <StemSpan key={i} i={i} />
          ))}
        </Stem>
        <Shadow />
      </TreeWrapper>
    </TreeContainer>
  );
}
