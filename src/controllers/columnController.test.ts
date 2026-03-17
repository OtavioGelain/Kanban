import {ColumnController} from './columnController';
import {ColumnService }from '../services/columnService';
import { Request, Response } from 'express';

jest.mock('../services/columnService');

describe('ColumnController', () => {
    it('showColumns should return a list of columns', async () => {
        // Mock the ColumnService.showColumns method to return a list of columns
        const mockColumns = [
            { id: 1, name: 'To Do', position: 1 },
            { id: 2, name: 'In Progress', position: 2 },
            { id: 3, name: 'Done', position: 3 },
        ];
        (ColumnService.showColumns as jest.Mock).mockResolvedValue(mockColumns);
    });
});