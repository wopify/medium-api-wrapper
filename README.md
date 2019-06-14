# medium-api-wrapper
A wrapper for fetching medium-posts on topic and only get the useful data back

### Description
A wrapper for fetching posts from Medium™ using their "?format=json" method. What you then get back is 10 posts from their feed on that topic that day. What returned from this wrapper will add are a couple of things. For example:

- A link to the actual post on Medium™
- A full object with data about the author

### Example

An example of an implementation and use of this wrapper can be seen here:

- [https://medium-posts.now.sh/](https://medium-posts.now.sh/)

## GET request

    https://vast-journey-70991.herokuapp.com/posts?topic={topic}
    
### Topics

```
{
  "Arts & Entertainment": [
    "Art",
    "Beauty",
    "Books",
    "Comics",
    "Culture",
    "Fiction",
    "Film",
    "Food",
    "Gaming",
    "Humor",
    "Music",
    "Photography",
    "Podcasts",
    "Poetry",
    "Social Media",
    "Sports",
    "Style",
    "TV",
    "Writing"
  ],
  "Industry": [
    "Business",
    "Design",
    "Economy",
    "Freelancing",
    "Leadership",
    "Marketing",
    "Product Management",
    "Productivity",
    "Startups",
    "Venture Capital",
    "Work"
  ],
  "Innovation & Tech": [
    "Accessibility",
    "Android Dev",
    "Artificial Intelligence",
    "Blockchain",
    "Cryptocurrency",
    "Cybersecurity",
    "Data Science",
    "Digital Life",
    "Gadgets",
    "Javascript",
    "Machine Learning",
    "Math",
    "Neuroscience",
    "Programming",
    "Science",
    "Self-Driving Cars",
    "Software Engineering",
    "Space",
    "Technology",
    "UX",
    "Visual Design",
    "iOS Dev"
  ],
  "Life": [
    "Addiction",
    "Creativity",
    "Disability",
    "Family",
    "Health",
    "Lifestyle",
    "Mental Health",
    "Mindfulness",
    "Money",
    "Parenting",
    "Pets",
    "Psychology",
    "Relationships",
    "Self",
    "Travel"
  ],
  "Society": [
    "Cities",
    "Education",
    "Environment",
    "Equality",
    "Future",
    "History",
    "Immigration",
    "Justice",
    "Language",
    "Media",
    "Philosophy",
    "Politics",
    "Privacy",
    "Race",
    "Religion",
    "Transportation"
  ]
}

```
