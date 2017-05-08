using System;

namespace Treehouse 
{
  class Program
  {
      static void Main()
      {   
          int runningTotal = 0;
          bool keepGoing = true;
        
          while (keepGoing) 
          {
                // Prompt user for minutes exercised 
                Console.Write("Enter how many minutes you exercised or type ' quit' to exit: "); 
                
                string entry = Console.ReadLine();
                
                if(entry == "quit") 
                {
                    keepGoing = false;
                } else 
             {      
                int minutes = int.Parse(entry);
                runningTotal = runningTotal + minutes;
                
                // Add minutes exercised to total 
                // Display total minutes exercised to the screen 
                Console.WriteLine("You've excercised " + runningTotal + " minutes");
                
                // Repeat until user quits 
              }
         }
      }
   }
}
