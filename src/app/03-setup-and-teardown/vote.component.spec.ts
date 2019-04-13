import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  let voteComponent : VoteComponent;

  beforeEach(()=>{
    voteComponent= new VoteComponent();
  });

  it('should increment the vote', () => {
    voteComponent.upVote();
    expect(voteComponent.totalVotes).toBe(1);
  });

  it('should decrement the vote', () => {
    voteComponent.downVote();
    expect(voteComponent.totalVotes).toBe(-1);
  });
});