import { ColumnEntity } from "../entities/Column";
import { AppDataSource } from "../database/data-source";

const columnRepository = AppDataSource.getRepository(ColumnEntity);

export class ColumnService {
    static async showColumns(): Promise<ColumnEntity[]> {
        const columns = await columnRepository.find();
        return columns;
    }
    static async showColumnById(id: number): Promise<ColumnEntity | null> {
        const column = await columnRepository.findOneBy({ id });
        if (!column) {
            throw new Error('Column not found');
        }
        return column;
    }
    static async createColumn(columnData: Partial<ColumnEntity>): Promise<ColumnEntity> {
        const column = await columnRepository.create(columnData);
        if(!column.name || !column.priority) {
            throw new Error('All fields are mandatory');
        }
        await columnRepository.save(column);
        return column;
    }
    static async updateColumn(id: number, columnData: Partial<ColumnEntity>): Promise<ColumnEntity> {
        const column = await columnRepository.findOneBy({ id });
        if (!column) {
            throw new Error('Column not found');
        }
        columnRepository.merge(column, columnData);
        await columnRepository.save(column);
        return column;
    }
    static async deleteColumn(id: number): Promise<void> {
        const column = await columnRepository.findOneBy({ id });
        if (!column) {
            throw new Error('Column not found');
        }
        await columnRepository.remove(column);
    }
    static async moveColumn(id: number, teamId: number): Promise<ColumnEntity> {
        const column = await columnRepository.findOneBy({ id });
        if (!column) {
            throw new Error('Column not found');
        }
        column.team = { id: teamId } as any;
        await columnRepository.save(column);
        return column;
    }
}
