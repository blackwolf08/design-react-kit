import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Classi aggiuntive da usare per il componente LinkList */
  className: PropTypes.string,
  /** Quando è abilitato gestisce una lista in cui ciascun elemento è composto da più componenti/elementi. */
  multiline: PropTypes.bool,
  sublist: PropTypes.bool,
  avatar: PropTypes.bool
}

const defaultProps = {
  tag: 'div'
}

const LinkList = props => {
  const {
    className,
    tag: Tag,
    multiline,
    sublist,
    avatar,
    ...attributes
  } = props
  const wrapperClasses = classNames(
    multiline ? 'multiline' : false,
    'link-list-wrapper'
  )
  const classes = classNames(
    className,
    sublist ? 'link-sublist' : 'link-list',
    avatar && 'avatar-group'
  )

  if (sublist) {
    return <ul {...attributes} className={classes} />
  }
  return (
    <Tag className={wrapperClasses}>
      <ul {...attributes} className={classes} />
    </Tag>
  )
}

LinkList.propTypes = propTypes
LinkList.defaultProps = defaultProps

export default LinkList
