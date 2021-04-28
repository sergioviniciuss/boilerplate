import * as S from './styles'

const Main = ({
  title = 'Advanced React',
  description = 'Typescript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Atom image - Advanced React" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A dev in front of the computer"
    />
  </S.Wrapper>
)

export default Main
