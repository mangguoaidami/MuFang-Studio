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

  private onItemPress = (article: Article) => {
    // console.log('index', index);
    console.log('article', article);
    this.props.navigation.navigate('Article 2', {params: article});
    // console.log('paramsOutPut', articles[index]);
    // switch(index) {
    //   case 0:
    //     this.props.navigation.navigate('Article List 1');
    //     break;
    //     case 1:
    //       this.props.navigation.navigate('Article 2', {params: article});
    //       break;
    //     case 2:
    //       this.props.navigation.navigate('Article 2', {params: article});
    //       break;
    //     case 3:
    //       this.props.navigation.navigate('Article 2', {params: article});
    //       break;
    //     default:
    //       this.props.navigation.navigate('Article 2', {params: article});
    //       break;
    // }
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
