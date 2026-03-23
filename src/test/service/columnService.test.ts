import { ColumnService } from "../../services/columnService";

describe('Column Service', () => {
    it('Should show Columns', async () => {
        const showColumns = await ColumnService.showColumns()

        expect(showColumns).toBeDefined()
        expect(Array.isArray(showColumns)).toBe(true)
    })
})