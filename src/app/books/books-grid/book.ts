export class Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;

  constructor(
    id: number,
    title: string,
    author: string,
    description: string,
    image: string
  )

  {   this.id = id;
      this.title = title;
      this.author = author;
      this.description = description;
      this.image = './assets/icons/business_book.svg';  
  }
}
