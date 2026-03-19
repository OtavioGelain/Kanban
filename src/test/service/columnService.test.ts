import { ColumnController } from "../../controllers/columnController";
import { ColumnService } from "../../services/columnService";

describe('ColumnController', () => {
    it('showColumns should return a list of columns', async () => {
       const body = {
        title: 'showColumns test',
        description: 'Testing the showColumns method',
       }

       const response = await ColumnService.showColumns();
       expect(response).toEqual(body);
    });
});