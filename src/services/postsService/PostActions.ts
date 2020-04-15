import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Post } from "../../entity/Post";

/**
 * Loads all posts from the database.
 */
export async function postGetAllAction(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const postRepository = getManager().getRepository(Post);

  // load a post by a given post id
  const posts = await postRepository.find();

  // return loaded posts
  response.send(posts);
}

export async function postGetByIdAction(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const postRepository = getManager().getRepository(Post);

  // load a post by a given post id
  const post = await postRepository.findOne(request.params.id);

  // if post was not found return 404 to the client
  if (!post) {
    response.status(404);
    response.send({ message: "error retrieving that post" });
    return;
  }

  // return loaded post
  response.send(post);
}

export async function postSaveAction(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const postRepository = getManager().getRepository(Post);

  // create a real post object from post json object sent over http
  const newPost = postRepository.create(request.body);

  // save received post
  await postRepository.save(newPost);

  // return saved post back
  response.send(newPost);
}
