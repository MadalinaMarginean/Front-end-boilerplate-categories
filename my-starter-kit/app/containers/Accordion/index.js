import * as React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  expansionDetails: {
    'flex-direction': 'column',
    'padding-right': 0,
    'background': 'white',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: 'white',
  },
});

function Accordion(props) {
  const { classes, categories, subcategories, backgroundColor } = props;
  const greyColorCode = ['#C0C0C0', '#A9A9A9', '#808080', '#D3D3D3', '#DCDCDC'];
  let childNodes;
  if (subcategories.length > 0) {
    childNodes = subcategories.map((node, index) => (
      <Accordion key={index} backgroundColor={greyColorCode[node.parent_id%5]} classes={classes} categories={node} subcategories={node.subset} />));
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel style={{'background': backgroundColor}}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{categories.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionDetails}>{childNodes}</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

Accordion.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  subcategories: PropTypes.array.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default withStyles(styles)(Accordion);
