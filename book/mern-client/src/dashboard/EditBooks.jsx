import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageUrl, category, bookDescription, pdfUrl } = useLoaderData();

  const bookCategories = [
    "Literary Fiction",
    "Science Fiction",
    "Fantasy",
    "Mystery/Thriller",
    "Romance",
    "Historical Fiction",
    "Adventure",
    "Biography/Autobiography",
    "History",
    "Memoir",
    "Self-Help",
    "Business/Finance",
    "Cooking/Food",
    "Travel",
    "Science",
    "Psychology",
    "Philosophy",
    "Picture Books",
    "Early Readers",
    "Middle Grade",
    "Young Adult",
    "Dictionaries",
    "Encyclopedias",
    "Atlases",
    "Almanacs",
    "Christianity",
    "Islam",
    "Buddhism",
    "Hinduism",
    "Judaism",
    "New Age/Spirituality",
    "Painting",
    "Photography",
    "Sculpture",
    "Architecture",
    "Biology",
    "Physics",
    "Chemistry",
    "Environmental Science",
    "Astronomy",
    "Diet/Nutrition",
    "Exercise/Fitness",
    "Wellness",
    "Medicine",
    "Teaching Methods",
    "Educational Psychology",
    "Textbooks",
    "Computer Science",
    "Engineering",
    "Internet & Web",
    "Political Science",
    "Sociology",
    "Anthropology",
    "Economics",
    "Law",
    "Sports",
    "Hobbies",
    "Games"
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value)
    setSelectedBookCategory(event.target.value);
  }

  //handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const pdfUrl = form.pdfUrl.value;

    const updateBookObj = {
      bookTitle, authorName, imageUrl, category, bookDescription, pdfUrl
    }
    // console.log(bookObj);

    // Updata book data
    fetch(`http://localhost:3000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {

      alert("Book is updated successfully!!!")
      // form.reset();
    })
  }

  return (
    <div className='px-2 my-6'>
      <h2 className='md-8 text-3xl font-bold'>Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* fist row*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="book Name" required defaultValue={bookTitle} />
          </div>

          {/*authorName */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="authorName" />
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required defaultValue={authorName} />
          </div>


        </div>
        {/* 2nd row*/}
        <div>
          {/* imageUrl */}
          <div className='flex gap-8'>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="imageUrl" value="Book Image Url" />
              </div>
              <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Book image Url" required defaultValue={imageUrl} />
            </div>

            {/* category */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="inputState" value="Category Name" />
              </div>
              <select name="categoryName" id="inputState" className='w-full rounded'
                value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                {
                  bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                }
              </select>
            </div>
          </div>
        </div>
        {/* bookDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="bookDescription" />
          </div>
          <Textarea id="bookDescription" name='bookDescription' placeholder="Write Your book description..." className='w-full' required rows={6} defaultValue={bookDescription} />
        </div>
        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pdfUrl" value="Book PDF URL" />
          </div>
          <TextInput id="pdfUrl" name="pdfUrl" type="text" placeholder="book pdf Url" required defaultValue={pdfUrl} />
        </div>
        {/*button */}
        <Button type="submit" className='mt-4' color="blue">Upload Book</Button>
      </form>
    </div>
  )
}

export default EditBooks