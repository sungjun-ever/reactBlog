<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){
        $data = Post::all();

        return response()->json(['post' => $data, 'all' => 1], 200);
    }

    public function show($id){
        $data = Post::find($id);
        if($data === null){
            return response()->json(['post' => null], 200);
        }
        return response()->json(['post' => $data, 'all' => 0], 200);
    }

    public function store(Request $request){
        $post = new Post();
        $post->title = $request->title;
        $post->story = $request->story;
        $post->ip = $_SERVER['REMOTE_ADDR'];
        $post->save();

        return response()->json(
           ['message' => '201'], 201);
    }

    public function update(){

    }

    public function delete(){

    }
}
