import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

import { getTimeTransformer } from './../utils/transformDate'

@Entity()
class Users implements IUsers.IItem {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 50 })
    name: string

    @CreateDateColumn({ type: 'timestamp', transformer: getTimeTransformer() })
    created_at: string

}

export default Users
