import { Button, Container, } from './FeedbackRank.styled'

export const FeedbackOptions = ({options , onLeaveFeedback}) => {
  return (
    <Container>
      {options.map(option => (
        <Button
          key={option}
          onClick={onLeaveFeedback(option)}
          type='button'
        >
          {option}
        </Button>
      ))}    
    </Container>
  )
}