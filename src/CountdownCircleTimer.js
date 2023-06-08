import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './CCT.css'

const UrgeWithPleasureComponent = () => (
    <div className='Container'>
    <div className='CCT'>
        <h3>Vous serez redirigé vers le site personnel de BAHAH M'BEIRIK </h3>
    </div>
        
      <div className='CCT1'>
        <CountdownCircleTimer
        isPlaying
        duration={5}
        colors={['#1ed14b', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[5, 2, 1, 0]}
        >
         {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
  </div>

)
export default UrgeWithPleasureComponent