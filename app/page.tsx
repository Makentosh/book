import App from '../src/components/App';
import StoreProvider from './StoreProvider';

export default function Page () {
  return (
      <StoreProvider>
        <App/>
      </StoreProvider>
  );
}
