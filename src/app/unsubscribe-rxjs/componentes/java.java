public class Conta {         
     private String nome;         
      private double saldo;         
       public Conta(String nome)         
        {                     
            this.nome = nome;                     
            this.saldo = 0.0;          
             }         
              public void depositar(double valor)          
              {                    
                  saldo = saldo + valor;           
                  }          
                   public double getSaldo ( )         
                     {                     
                         return saldo;            
                         }            
                         public void setNome(String nome)           {                      
     this.nome = nome;            }           
      public String getNome()           {                       
          return nome;            
          } }