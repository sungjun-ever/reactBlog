<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function search(Request $request){
        $p = $request->param;

        $posts = Post::whereRaw(
            "MATCH(title, story) AGAINST(? IN BOOLEAN MODE)",
            array($p)
        )->get();


        return response()->json(['post'=>$posts], 200);
    }
}
