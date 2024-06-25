import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Loading(props) {
  return (
    <main>
      <Skeleton
        count={4}
        height='6rem'
        borderRadius='0.5rem'
        style={{
          display: 'flex',
        }}
      />

    </main>
  );
}

export default Loading;