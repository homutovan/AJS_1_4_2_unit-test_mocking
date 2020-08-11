import fetchData from '../http';
import getLevel from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call fetchData once', () => {
  fetchData.mockReturnValue({});
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('schecking for the OK status', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1 });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 1');
});

test('checking for the Err status', () => {
  fetchData.mockReturnValue({ status: 'err' });
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
