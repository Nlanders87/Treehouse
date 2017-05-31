using System;

namespace Treehouse 
{
  class Program
  {
      static void Main()
      {   
          double runningTotal = 0;
          bool keepGoing = true;
        
          while (keepGoing) 
          {
              // Prompt user for minutes exercised 
              Console.Write("Enter how many minutes you exercised or type 'quit' to exit: "); 
            
              string entry = Console.ReadLine();
            
              if(entry.ToLower() == "quit") 
              {
                 break;
              } else 
              {
              try 
                {
                  double minutes = double.Parse(entry);
                  
                if(minutes <= 0)
                {
                  Console.WriteLine(minutes + " is not an acceptable response");
                  continue;
                }
                else if(minutes <= 10)
                {
                  Console.WriteLine("Better than nothing, am I right?");
                }
                else if(minutes <= 30)
                {
                  Console.WriteLine("way to go hot stuff");
                }
                else if(minutes <= 60)
                {
                  Console.WriteLine("YOu must be a ninja warrior in training");
                }
                else
                {
                  Console.WriteLine("Okay, now you're just showing off");
                }
              runningTotal = runningTotal + minutes;
                }
                catch(FormatException)
                {
                  Console.WriteLine("That is not a valid input");
                  continue;
                }
              
            
              // Add minutes exercised to total 
              // Display total minutes exercised to the screen 
              Console.WriteLine("You've excercised " + runningTotal + " minutes");
              
              // Repeat until user quits 
              }
         }
      }
   }
}
