import { actionChannel, put, take, delay } from 'redux-saga/effects';

export default function* counter() {
  const channel = yield actionChannel('counter/INCREMENT_REQUEST');

  while (true) {
    const action = yield take(channel);

    yield delay(2000);

    yield put({
      type: 'counter/INCREMENT'
    });
  }
}
