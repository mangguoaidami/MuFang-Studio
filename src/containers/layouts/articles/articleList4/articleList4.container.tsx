import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { articles } from '@src/core/data/article';
import { Article } from '@src/core/model';
import { ArticleList4 } from './articleList4.component';

interface State {
  articles: Article[];
}

export class ArticleList4Container extends React.Component<NavigationScreenProps> {

  public state: State = {
    articles: articles,
  };

  private onItemPress = (index: number) => {
    console.log('index', index);
    switch(index) {
      case 0:
        this.props.navigation.navigate('Article List 1');
        break;
        case 1:
          this.props.navigation.navigate('Article 2');
          break;
        case 2:
          this.props.navigation.navigate('Article 2');
          break;
        case 3:
          this.props.navigation.navigate('Article 2');
          break;
        default:
          this.props.navigation.navigate('Article 2');
          break;
    }
  };

  private onItemLikePress = (index: number) => {

  };

  private onItemCommentPress = (index: number) => {

  };

  public render(): React.ReactNode {
    return (
      <ArticleList4
        articles={articles}
        onItemPress={this.onItemPress}
        onItemLikePress={this.onItemLikePress}
        onItemCommentPress={this.onItemCommentPress}
      />
    );
  }
}
