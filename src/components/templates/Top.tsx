import React from 'react'
import {ArticleList} from 'src/components/oraganisms/ArticleList'
import styles from 'src/styles/Top.module.scss'
import {Box, List, ListItem} from "@material-ui/core";
import {ArticleItem} from "../molecules/ArticleItem";

export const Top = ({columns}: {columns: any}) => (
  <Box className={styles.top}>
    {columns.map((column: any) => (
      <Box key={column.id}>
        <h2 className={styles.topSectionTitle}>
          {column.note.name}
        </h2>
        <List className={styles.columnsList}>
          {column.relatedTopNotes.map((relatedTopNote: any) => (
            <ListItem key={relatedTopNote.id}>
              <ArticleItem
                imageUrl={relatedTopNote.eyecatch}
                title={relatedTopNote.name}
                publishAt={relatedTopNote.publishAt}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    ))}
  </Box>
)
