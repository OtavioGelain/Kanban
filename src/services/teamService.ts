import {Team} from "../entities/Team";
import { AppDataSource } from "../database/data-source";

const teamRepository = AppDataSource.getRepository(Team);

export class TeamService {
    static async showTeams(): Promise<Team[]> {
        const teams = await teamRepository.find();
        return teams;
    }
    static async showTeamById(id: number): Promise<Team | null> {
        const team = await teamRepository.findOneBy({ id });
        if (!team) {
            throw new Error('Team not found');
        }
        return team;
    }
    static async createTeam(teamData: Partial<Team>): Promise<Team> {
        const team = teamRepository.create(teamData);
        if(!team.name || !team.description) {
            throw new Error('All fields are mandatory');
        }
        await teamRepository.save(team);
        return team;
    }
    static async updateTeam(id: number, teamData: Partial<Team>): Promise<Team> {
        const team = await teamRepository.findOneBy({ id });
        if (!team) {
            throw new Error('Team not found');
        }
        teamRepository.merge(team, teamData);
        await teamRepository.save(team);
        return team;
    }
    static async deleteTeam(id: number): Promise<Team> {
        const team = await teamRepository.findOneBy({ id });
        if (!team) {
            throw new Error('Team not found');
        }
        await teamRepository.remove(team);
        return team;
    }
    static async showTeamColumns(id: number): Promise<Team> {
        const team = await teamRepository.findOne({ where: { id }, relations: ['columns'] });
        if (!team) {
            throw new Error('Team not found');
        }
        return team;
    }
}