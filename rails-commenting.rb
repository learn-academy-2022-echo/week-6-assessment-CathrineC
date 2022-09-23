# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The BlogPostController inherits from Application controller. BlogController will have it's own information and have access to the content from Application Controller.
class BlogPostsController < ApplicationController
  def index
    # ---2) @post is an instance variable that will list all the data stored in database BlogPost.
    @posts = BlogPost.all
  end

  # ---3) def mean defining method show. Show is a RESTful controller which means showing a specific item from the database.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) def mean defining method new. New is a RESTful controller that is an HTML form for creating an item to insert into the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) @post is an instance variable with a value to create a new object which means that it will add a value as a new item in the database BlogPost. ".create()" has the parameter "blog_post_params".
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) @post is an instance variable that will return the id that is being called in the params[:id]
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) .update method updates the specific item from @post with a parameter called by 'blog_post_params'.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) this is the result from the condition that if the .destroy methos is not succesful it will revert the user back to the blog_post_path(@post)
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private is a way to protect anything below it. It can only be accessed by using strong parameters as an argument for controller methods. 
  private
  def blog_post_params
    # ---10) Params are parameters that is required by the method .require to ensure that it is present. If not present will return an error. The .permit method returns only the allowed keys and values.
    params.require(:blog_post).permit(:title, :content)
  end
end
