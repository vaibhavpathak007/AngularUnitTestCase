import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should subscribe to the upvote', () => {
    let upvoteCount : number;
    component.voteChanged.subscribe((votes)=>{
      upvoteCount = votes;
    });
    component.upVote();
    expect(upvoteCount).toEqual(1);
  });
});