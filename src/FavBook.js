import React, { Component } from "react";
 
class FavBook extends Component {
  render() {
    return (
      <div>
        <h2>Some of My Favorite Books</h2>
        <ul>
			<li><strong>Annihilation</strong> by Jeff Vandermeer</li>
			<li><strong>Slaughterhouse Five</strong> by Kurt Vonnegut</li>
			<li><strong>The Demon-Haunted World</strong> by Carl Sagan</li>
			<li><strong>Cosmos</strong> by Carl Sagan</li>
		</ul>
      </div>
    );
  }
}
 
export default FavBook;