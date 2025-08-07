import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Beef, BookText, Clock, CookingPot, Heart, ListOrdered, NotebookText, Users } from 'lucide-react';

const recipe = {
  name: "Classic Beef Bolognese",
  mealType: "Dinner",
  image: "https://placehold.co/1200x600.png",
  imageHint: "beef bolognese",
  category: "Beef",
  dietaryPreference: "High-Protein",
  totalTime: "2 hours 30 mins",
  servings: "6",
  ingredients: [
    { quantity: "2 tbsp", name: "Olive Oil" },
    { quantity: "1 large", name: "Onion, finely chopped" },
    { quantity: "2", name: "Carrots, finely chopped" },
    { quantity: "2", name: "Celery stalks, finely chopped" },
    { quantity: "2 cloves", name: "Garlic, minced" },
    { quantity: "1 lb", name: "Ground Beef" },
    { quantity: "1/2 lb", name: "Ground Pork" },
    { quantity: "1 cup", name: "Dry Red Wine" },
    { quantity: "28 oz can", name: "Crushed Tomatoes" },
    { quantity: "1 cup", name: "Whole Milk" },
    { quantity: "1 tsp", name: "Nutmeg, freshly grated" },
    { quantity: "to taste", name: "Salt & Black Pepper" },
    { quantity: "1 lb", name: "Tagliatelle Pasta" },
    { quantity: "for serving", name: "Parmesan Cheese" },
  ],
  directions: [
    "Heat olive oil in a large pot or Dutch oven over medium heat. Add onion, carrots, and celery. Cook until softened, about 10 minutes.",
    "Add garlic and cook for another minute until fragrant.",
    "Increase heat to medium-high, add ground beef and pork. Break up the meat with a spoon and cook until browned.",
    "Pour in the red wine and cook until it has evaporated, scraping any browned bits from the bottom of the pot.",
    "Stir in the crushed tomatoes, milk, and nutmeg. Season with salt and pepper.",
    "Bring to a simmer, then reduce heat to low, cover, and let it cook for at least 2 hours, stirring occasionally. The longer it simmers, the better the flavor.",
    "About 15 minutes before the sauce is done, cook the pasta according to package directions until al dente.",
    "Serve the sauce over the pasta, topped with a generous amount of Parmesan cheese."
  ],
  notes: "This sauce freezes beautifully. Make a double batch and save half for a quick weeknight meal."
};


export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start p-4 sm:p-8 md:p-12 font-body bg-background">
      <div className="w-full max-w-5xl mx-auto space-y-8 animate-fade-in">
        
        <header className="space-y-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">
            {recipe.name}
          </h1>
          <div className="flex justify-center items-center flex-wrap gap-2">
            <Badge variant="outline" className="text-sm border-accent/50 bg-accent/20 hover:bg-accent/30">
                <CookingPot className="mr-2 h-4 w-4 text-primary" />
                {recipe.mealType}
            </Badge>
            <Badge variant="outline" className="text-sm border-accent/50 bg-accent/20 hover:bg-accent/30">
                <Beef className="mr-2 h-4 w-4 text-primary" />
                {recipe.category}
            </Badge>
            <Badge variant="outline" className="text-sm border-accent/50 bg-accent/20 hover:bg-accent/30">
                <Heart className="mr-2 h-4 w-4 text-primary" />
                {recipe.dietaryPreference}
            </Badge>
          </div>
        </header>

        <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/10">
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            data-ai-hint={recipe.imageHint}
            priority
          />
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-8 w-8 text-primary" />
              <p className="font-semibold">Total Time</p>
              <p className="text-muted-foreground">{recipe.totalTime}</p>
            </div>
             <div className="flex flex-col items-center gap-2">
              <Users className="h-8 w-8 text-primary" />
              <p className="font-semibold">Servings</p>
              <p className="text-muted-foreground">{recipe.servings}</p>
            </div>
             <div className="flex flex-col items-center gap-2">
              <Beef className="h-8 w-8 text-primary" />
              <p className="font-semibold">Category</p>
              <p className="text-muted-foreground">{recipe.category}</p>
            </div>
             <div className="flex flex-col items-center gap-2">
              <Heart className="h-8 w-8 text-primary" />
              <p className="font-semibold">Dietary</p>
              <p className="text-muted-foreground">{recipe.dietaryPreference}</p>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 md:sticky md:top-8">
                <Card className="h-full shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary flex items-center gap-3">
                            <NotebookText className="h-7 w-7" /> Ingredients
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 text-sm">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="font-bold w-1/3 flex-shrink-0 pr-2 text-primary/80">{ingredient.quantity}</span>
                                    <span className="flex-1">{ingredient.name}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div className="md:col-span-2 space-y-8">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary flex items-center gap-3">
                            <ListOrdered className="h-7 w-7" /> Directions
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ol className="list-decimal list-inside space-y-4 marker:text-primary marker:font-bold">
                            {recipe.directions.map((step, index) => (
                                <li key={index} className="pl-2 leading-relaxed">{step}</li>
                            ))}
                        </ol>
                    </CardContent>
                </Card>

                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary flex items-center gap-3">
                            <BookText className="h-7 w-7" /> Notes
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground italic leading-relaxed">{recipe.notes}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </main>
  );
}
