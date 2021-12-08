import { Handler } from '../types';

export const home: Handler = (_, res) => {
    res.send('Hello world');
};
