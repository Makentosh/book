import App from '../src/components/App';
import StoreProvider from './StoreProvider';
import AnimationProvider from './AnimationProvider';

export default function Page () {
  return (
      <StoreProvider>
        <AnimationProvider>
          <App/>
        </AnimationProvider>
      </StoreProvider>
  );
}
