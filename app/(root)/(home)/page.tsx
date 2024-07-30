import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";

import Filters from "@/components/shared/Filters";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";

import Link from "next/link";

import React from "react";

const questions = [
  {
    _id: 1,
    title: "Redux Toolkit Not Updating State as Expected",
    tags: [
      { _id: "1", name: "SQL" },
      { _id: "2", name: "React" },
    ],
    author: {
      _id: "a1",
      name: "John Doe",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    upvotes: 10,
    views: 10000,
    answers: [],
    createtAt: new Date("2024-02-30T12:00:00.000Z"),
  },
  {
    _id: 2,
    title:
      "Handling Form Data and User Registration in MERN Stack: Issues with FormData and Validation",
    tags: [
      { _id: "3", name: "MERN" },
      { _id: "4", name: "React" },
    ],
    author: {
      _id: "a2",
      name: "Jane Smith",
      picture: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    upvotes: 8,
    views: 9230,
    answers: [],
    createtAt: new Date("2024-07-30T12:00:00.000Z"),
  },
];

const Home = () => {
  return (
    <>
      <div
        className="flex w-full flex-col-reverse justify-between
       gap-4 sm:flex-row sm:items-center"
      >
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
        <Filters
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createtAt={question.createtAt}
            />
          ))
        ) : (
          <NoResult
            title=" There’s no question to show"
            description="  Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            link="/ask-question"
            linkTitle="As a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
