<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(): array
    {
        $posts = Post::all()->toArray();
        return array_reverse($posts);
    }
}
