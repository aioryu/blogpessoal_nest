import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';

@Entity({name: "tb_postagens"})
export class Postagem{

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;
    
    @UpdateDateColumn()
    data: Date;
   
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: 'tema_id' })
    tema: Tema;
    
    

    constructor(id: number, titulo: string, texto: string, data: Date, foto: string, temaId: number) {
        this.id = id;
        this.titulo = titulo;
        this.texto = texto;
        this.data = data;
        

}}