package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.35

import (
	"context"
	"crypto/md5"
	"encoding/hex"

	"github.com/fibs7000/go-graphql-benchmark/graph/generated"
	"github.com/fibs7000/go-graphql-benchmark/graph/model"
	"github.com/fibs7000/go-graphql-benchmark/src/data"
)

var authorJSON []*model.Author = data.GenData()

// Md5 is the resolver for the md5 field.
func (r *authorResolver) Md5(ctx context.Context, obj *model.Author) (string, error) {

	return GetMD5Hash(obj.Name), nil
}

// Authors is the resolver for the authors field.
func (r *queryResolver) Authors(ctx context.Context) ([]*model.Author, error) {
	return authorJSON, nil
}

// Author returns generated.AuthorResolver implementation.
func (r *Resolver) Author() generated.AuthorResolver { return &authorResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type authorResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }

func GetMD5Hash(text string) string {
	hash := md5.Sum([]byte(text))
	return hex.EncodeToString(hash[:])
}
