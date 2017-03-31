import { Component, OnInit } from '@angular/core';

import { Book } from './book';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  books: Book[] = [
    {
      id: 1,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems, allowing you to roll out higher quality, more consistent UIs faster than ever before.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 2,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems, allowing you to roll out higher quality, more consistent UIs faster than ever before.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 3,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems, allowing you to roll out higher quality, more consistent UIs faster than ever before.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 4,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems, allowing you to roll out higher quality, more consistent UIs faster than ever before.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 5,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems, allowing you to roll out higher quality, more consistent UIs faster than ever before.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 6,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems, allowing you to roll out higher quality, more consistent UIs faster than ever before.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 7,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems, allowing you to roll out higher quality, more consistent UIs faster than ever before.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    }
  ]

}
