import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Loading(props) {
  return (
    <main>
      <nav>
        <h2>Ticket detail</h2>
      </nav>
        <Skeleton width='15rem' height='1.5rem' borderRadius='0.3rem'/>
        <Skeleton width='15rem' height='1.5rem' borderRadius='0.3rem'/>
        <Skeleton height='10rem' borderRadius='0.5rem'/>
    </main>
  );
}

export default Loading;