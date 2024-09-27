export interface Usuarios {
    id: number; 
    "departamentodto.id": number;
    "departamentodto.descricao": string;
    email: string;
    senha: string;
    userName: string;
    bloquear: boolean; 
    permissaocadclientes: boolean;  
    permissaocadendereco: boolean;  
    permissaocadproduto: boolean;  
    permissaopedidocompra: boolean; 
    permissaopedidovenda: boolean;            
}